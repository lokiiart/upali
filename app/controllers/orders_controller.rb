# coding: utf-8
class OrdersController < ApplicationController
  before_action :set_order, only: [:show, :edit, :update, :destroy]
  protect_from_forgery :except => [:create, :alipay]

  # GET /orders
  # GET /orders.json
  def index
    @orders = Order.all
  end

  # GET /orders/1
  # GET /orders/1.json
  def show
  end

  # GET /orders/new
  def new
    @order = Order.new
  end

  # GET /orders/1/edit
  def edit
  end

  # POST /orders
  # POST /orders.json
  def create
    # 更新
    @order = Order.new(order_params)
    order_params.each do |v|
      if rubbish_filter(v)
        render json: {error: true, message:"下单失败, 请认真填写表单, 不能包含特殊符号."}
        return
      end
    end

    respond_to do |format|
      if @order.save
        format.html { redirect_to @order, notice: 'Order was successfully created.' }
        format.json { render :show, status: :created, location: @order }
      else
        format.html { render :new }
        format.json { render json: @order.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /orders/1
  # PATCH/PUT /orders/1.json
  def update
    respond_to do |format|
      if @order.update(order_params)
        format.html { redirect_to @order, notice: 'Order was successfully updated.' }
        format.json { render :show, status: :ok, location: @order }
      else
        format.html { render :edit }
        format.json { render json: @order.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /orders/1
  # DELETE /orders/1.json
  def destroy
    @order.destroy
    respond_to do |format|
      format.html { redirect_to orders_url, notice: 'Order was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def alipay
    @order = Order.new
    params.each do |v|
      if rubbish_filter(v)
        render plain: "下单失败, 请认真填写表单, 不能包含特殊符号."
        return
      end
    end
    @order.customer = params[:customer]
    @order.price = params[:price]
    @order.phone = params[:phone]
    @order.address = "测试" + params[:address]
    @order.payment = params[:payment]
    @order.notes = params[:notes]
    if @order.save
      @alipay_order = {
        # 'service': 'create_direct_pay_by_user',
        'service': 'alipay.wap.create.direct.pay.by.user',
                      'partner': '2088221413889518',
                      'seller_id': '2088221413889518',
                      'payment_type': '1',
                      'out_trade_no': @order.id,
                      'subject': "优波粒"+@order.price+"套装",
                      'total_fee': @order.price,
                      'show_url': 'http://51upali.com',
                      '_input_charset': 'utf-8'
      }
      # @order[:sign] = alipay_sign alipay_order.sort
      # @alipay_order = {}
      # @order.instance_variables.each {|var| @alipay_order [var.to_s.delete("@")] = @order.instance_variable_get(var)}

      @alipay_order[:sign] = alipay_sign(@alipay_order.sort)

    else

    end
    render layout: false, template: 'orders/alipay'
  end

  private

    def rubbish_filter(param)
      rubbish=/[\s+\.\!\/_,$%^*(+\"\']+|[+——！，。？、~@#￥%……&*（）]+/.match(param)
      return rubbish.nil?
    end

    # Use callbacks to share common setup or constraints between actions.
    def alipay_sign(order_key)
      key_list = ""
      order_key.each do |k, v| 
        key_list += "#{k}=#{v}&"
      end
      md5_key = "h1zyv5kci0tftioi6l4eqc7wgoq6yjv0"
      sign_string = key_list.chop + md5_key
      signd_string = Digest::MD5.hexdigest(sign_string)
      return signd_string
    end

    def set_order
      @order = Order.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def order_params
      params.require(:order).permit(:customer, :price, :phone, :address, :payment, :notes)
    end
end
