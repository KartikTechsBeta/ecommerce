import { Routes } from '@angular/router';

// Customer Pages
import { HomeComponent } from './pages/home/home.component';
import { ProductListComponent } from './pages/products/product-list/product-list.component';
import { ProductDetailComponent } from './pages/products/product-detail/product-detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProfileComponent } from './pages/profile/profile.component';

// Auth Pages
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

// Admin Pages
import { AdminProductListComponent } from './admin/products/admin-product-list/admin-product-list.component';
import { AdminProductCreateComponent } from './admin/products/admin-product-create/admin-product-create.component';
import { AdminOrdersComponent } from './admin/orders/admin-orders/admin-orders.component';

export const routes: Routes = [
  // Customer routes
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'profile', component: ProfileComponent },

  // Auth routes
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Admin routes
  { path: 'admin/products', component: AdminProductListComponent },
  { path: 'admin/products/create', component: AdminProductCreateComponent },
  { path: 'admin/orders', component: AdminOrdersComponent },


];
