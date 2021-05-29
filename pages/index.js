import Head from 'next/head'

export default function Home() {
  return (
    <body className="bg-[#0e0521] h-screen">
      <Head>
        <title>CoolFaucet - get free DOGE</title>
        <meta name="description" content="coolFaucet" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://arc.io/widget.min.js#NP3eThpG"></script>
      </Head>
     
     <center>
   <div>
     <img src="doge.png" alt="doge" />
   </div>

      <div class="w-full max-w-md m-4">
        <div className="bg-red-50 rounded-xl m-4">
          <b>

          donate:
          </b>
          &nbsp;DB4bzMjPYTK4QGK2j3P8Cjo6nZk1Y3YLwf
        </div>
  <form class="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="address">
        Address
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="text" name="address" placeholder="Enter DOGE address linked with faucetpay.io" />
    </div>
    
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Claim!
      </button>
    </div>
  </form>
  
</div>


     </center>
    </body>
  )
}
