import HomeBtn from '../components/HomeBtn';

function T1_5(props: any) {
  return (
    <main className="min-h-screen bg-white flex justify-center items-center">
      <HomeBtn />
      <section className="p-16 my-16 border-2 border-black border-dotted">
        <h1 className="uppercase text-4xl font-bold text-center pb-4">
          Checkout
        </h1>

        <section className="py-4">
          <h2 className="uppercase text-lg text-center py-2">
            Client information
          </h2>

          <form action="" className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="flex flex-col">
                <input
                  type="text"
                  className="border-b border-black p-2"
                  placeholder="First name"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  className="border-b border-black p-2"
                  placeholder="Last name"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col">
                <input
                  type="text"
                  className="border-b border-black p-2"
                  placeholder="Email"
                />
              </div>

              <div className="flex flex-col">
                <input
                  type="text"
                  className="border-b border-black p-2"
                  placeholder="Phone"
                />
              </div>
            </div>
          </form>
        </section>

        <section className="py-4">
          <h2 className="uppercase text-lg text-center py-2">
            Shipping information
          </h2>

          <form action="" className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="flex flex-col">
                <input
                  type="text"
                  className="border-b border-black p-2"
                  placeholder="Country"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  className="border-b border-black p-2"
                  placeholder="City"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col">
                <input
                  type="text"
                  className="border-b border-black p-2"
                  placeholder="Adress"
                />
              </div>

              <div className="flex flex-col">
                <input
                  type="text"
                  className="border-b border-black p-2"
                  placeholder="ZIP Code"
                />
              </div>
            </div>
          </form>
        </section>

        <section className="py-4">
          <h2 className="uppercase text-lg text-center ">Order details</h2>

          <section className="border-b flex justify-between py-4 border-black">
            <p>Lorem ipsum</p>
            <p>$ 150.00</p>
          </section>

          <section className="border-b flex justify-between py-4 border-black">
            <p>Lorem ipsum (2)</p>
            <p>$ 200.00</p>
          </section>

          <section className="border-b flex justify-between py-4 border-black">
            <p>Lorem ipsum</p>
            <p>$ 170.00</p>
          </section>

          <section className="flex justify-end py-4 border-black gap-4">
            <p className="uppercase">Subtotal</p>
            <p>$ 520.00</p>
          </section>

          <section className="border-b flex justify-end py-4 border-black gap-4">
            <p className="uppercase">TAX</p>
            <p>+ $ 5.20</p>
          </section>

          <section className="flex justify-end py-4 border-black gap-4 font-bold">
            <p className="uppercase">Total</p>
            <p>$ 525.20</p>
          </section>
        </section>

        <button className="uppercase p-2 mt-4 border border-black  hover:bg-black hover:text-white w-full">
          Confirm Payment
        </button>
      </section>
    </main>
  );
}

export default T1_5;
