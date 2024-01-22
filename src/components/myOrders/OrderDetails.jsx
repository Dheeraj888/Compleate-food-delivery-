import React from 'react'

export const OrderDetails = () => {
  return (
    <section className='orderDetails'>
        
        <main>
            <h1>Order Details</h1>
            <div>
                <h1>Shipping</h1>
                <p>
                    <b>Adress</b>
                    {"122-mumbai_india"}
                </p>
            </div>
            <div>
                <h1>Contact</h1>
                <p>
                    <b>name</b>
                    {"Dheeraj"}

                    <p>
                        <b>Phone </b>
                            {2146301238}
                    </p>
                </p>
            </div>
            <div>
                <h1>Status</h1>
                <p>
                    <b>order Status</b>
                    {"Processing"}

                    <p>
                        <b>placed at </b>
                            {"23-02-2002"}
                    </p>
                    <p>
                        <b>Delivered at </b>
                            {"23-02-2002"}
                    </p>
                    
                </p>
            </div>
            <div>
                <h1>Payment</h1>
                <p>
                    <b>Payment Method</b>
                    {"C-O-D"}

                    <p>
                        <b>Payment Refrence </b>
                            #{"12wwdhlkwkdh1"}
                    </p>
                    <p>
                        <b>Paid at </b>
                            {"23-02-2002"}
                    </p>
                    
                </p>
            </div>
            <div>
                <h1>Amount</h1>
                <p>
                    <b>Payment Method</b>
                    {"C-O-D"}

                    <p>
                        <b>Items Total </b>
                            ${2234}
                    </p>
                    <p>
                        <b>Shipping Charges </b>
                            ${234}
                    </p>
                    <p>
                        <b>Tax Charges </b>
                            ${200}
                    </p>
                    <p>
                        <b>Total Amount </b>
                            ${2234 + 234 + 200 }
                    </p>
                    
                    
                </p>
            </div>

            <article>
                <h1>Ordered Items</h1>
                <div>
                    <h4>Cheese Burger</h4>
                    <div>
                        <span>{12}</span> x <span>{232}</span>
                    </div>
                </div>
                <div>
                    <h4> veg Cheese Burger</h4>
                    <div>
                        <span>{11}</span> x <span>{222}</span>
                    </div>
                </div>
                <div>
                    <h4>paneer Burger</h4>
                    <div>
                        <span>{8}</span> x <span>{202}</span>
                    </div>
                </div>
                <div>
                    <h4
                    style={{
                        fontWeight:800,
                    }}>Sub Total</h4>
                    <div>$ {2132}</div>
                </div>
               
            </article>
           
        </main>
    </section>
  )
}
