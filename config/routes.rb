Rails.application.routes.draw do
  post 'alipay_orders', to: 'orders#alipay'
  resources :orders
  root 'pages#home'
end
