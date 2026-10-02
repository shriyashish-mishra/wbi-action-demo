create table tenants (id uuid primary key);
create table subscriptions (id uuid primary key, tenant_id uuid, status text);
