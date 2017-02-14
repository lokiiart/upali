json.extract! order, :id, :customer, :price, :phone, :address, :payment, :notes, :created_at, :updated_at
json.url order_url(order, format: :json)