-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ⚠️ Drop policies first to avoid dependencies if recreating tables (Optional, mostly for clean slate)
drop policy if exists "Public read stores" on public.stores;
drop policy if exists "Public read menu" on public.menu_items;
drop policy if exists "Public read categories" on public.categories;
drop policy if exists "Public insert orders" on public.orders;
drop policy if exists "Public insert order items" on public.order_items;
drop policy if exists "Public read comments" on public.comments;
drop policy if exists "Public insert comments" on public.comments;

-- 1. Create Stores Table (If not exists)
create table if not exists public.stores (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  description text,
  image_url text,
  link_url text,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- 2. Create Categories Table
create table if not exists public.categories (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  sort_order int default 0
);

-- 3. Create Menu Items Table
create table if not exists public.menu_items (
  id uuid default uuid_generate_v4() primary key,
  store_id uuid references public.stores(id),
  name text not null,
  description text,
  price decimal(10,2) not null,
  category_id uuid references public.categories(id),
  image_url text,
  is_available boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- 4. Create Orders/OrderItems
create table if not exists public.orders (
  id uuid default uuid_generate_v4() primary key,
  customer_name text default 'Guest',
  total_amount decimal(10,2) not null,
  status text default 'pending',
  created_at timestamp with time zone default timezone('utc'::text, now())
);

create table if not exists public.order_items (
  id uuid default uuid_generate_v4() primary key,
  order_id uuid references public.orders(id),
  menu_item_id uuid references public.menu_items(id),
  quantity int default 1,
  unit_price decimal(10,2) not null
);

-- 5. Create Comments/Forum Table
create table if not exists public.comments (
  id uuid default uuid_generate_v4() primary key,
  user_name text default '訪客',
  content text not null,
  is_pinned boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Enable RLS (Safe to run multiple times)
alter table public.stores enable row level security;
alter table public.menu_items enable row level security;
alter table public.categories enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;
alter table public.comments enable row level security;

-- Create Policies (Drop first to ensure update)
-- Stores
drop policy if exists "Public read stores" on public.stores;
create policy "Public read stores" on public.stores for select using (true);

-- Menu Items
drop policy if exists "Public read menu" on public.menu_items;
create policy "Public read menu" on public.menu_items for select using (true);

-- Categories
drop policy if exists "Public read categories" on public.categories;
create policy "Public read categories" on public.categories for select using (true);

-- Orders
drop policy if exists "Public insert orders" on public.orders;
create policy "Public insert orders" on public.orders for insert with check (true);

-- Order Items
drop policy if exists "Public insert order items" on public.order_items;
create policy "Public insert order items" on public.order_items for insert with check (true);

-- Comments
drop policy if exists "Public read comments" on public.comments;
create policy "Public read comments" on public.comments for select using (true);

drop policy if exists "Public insert comments" on public.comments;
create policy "Public insert comments" on public.comments for insert with check (true);

drop policy if exists "Public update comments" on public.comments;
create policy "Public update comments" on public.comments for update using (true) with check (true);


-- 6. Create VR Forum Comments Table
create table if not exists public.vr_comments (
  id uuid default uuid_generate_v4() primary key,
  user_name text default '訪客',
  content text not null,
  is_pinned boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Enable RLS for VR Comments
alter table public.vr_comments enable row level security;

-- VR Comments Policies
drop policy if exists "Public read vr_comments" on public.vr_comments;
create policy "Public read vr_comments" on public.vr_comments for select using (true);

drop policy if exists "Public insert vr_comments" on public.vr_comments;
create policy "Public insert vr_comments" on public.vr_comments for insert with check (true);

drop policy if exists "Public update vr_comments" on public.vr_comments;
create policy "Public update vr_comments" on public.vr_comments for update using (true) with check (true);

-- Seed Data (Only if tables are empty, simple check)
-- This part is tricky in pure SQL script without functions if we want to be truly idempotent but simple usually works.
-- For now, let's keep the manual seeding instructions or use ON CONFLICT if constraints exist.
-- To be safe, avoiding duplicate processing for seed data in this "fix" script, assuming the user might have some data or none.
-- If you need to re-seed, you would typically truncate.
