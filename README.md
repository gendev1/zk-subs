# MaskD - Anonymous Payments to Any Service Provider

![MaskD Logo](https://cdn.discordapp.com/attachments/1105610567454052406/1155459855277105172/skunks.ai_an_dystopian_society_filled_with_masked_people_in_a_b_c817cb1b-a564-4e30-a442-e363db1fff78.png)

## What is MaskD?

MaskD is a revolutionary tool that empowers you to make anonymous payments to any service provider you choose. Whether it's streaming services like Netflix, online gaming platforms like FanDuel, or any other service, MaskD lets you keep your identity a secret while accessing the services you love.

## User Flow

Here's a step-by-step guide to using MaskD:

### 1. Get Started

![Get Started](https://gtrvjdtwdfnbjeytdjvv.supabase.co/storage/v1/object/public/warp/public/1.png)


### 2. Provider Adds Their Details

![Provider Registration](https://gtrvjdtwdfnbjeytdjvv.supabase.co/storage/v1/object/public/warp/public/4.png)

Service providers, such as streaming services or online platforms, can register with MaskD. They provide their details to offer their services while keeping user identities confidential.

### 3. Subscriber Creates Subscription

![Subscriber Subscription](https://gtrvjdtwdfnbjeytdjvv.supabase.co/storage/v1/object/public/warp/public/2.png)

As a subscriber, you can create a subscription to access your desired service. Choose the service provider you want and set up your subscription through MaskD.

![Subscriber Subscription](https://gtrvjdtwdfnbjeytdjvv.supabase.co/storage/v1/object/public/warp/public/3.png)

Once your subscription is set up, you'll receive a confirmation and zero-knowledge proof (ZKP) to prove your payment without revealing your identity.

### 4. Access Your Service

![Access Service](https://gtrvjdtwdfnbjeytdjvv.supabase.co/storage/v1/object/public/warp/public/5.png)

Finally, you can visit the website of your chosen service provider and use your zero-knowledge proof (ZKP) to access the service. Enjoy your favorite content or services without compromising your privacy!

With MaskD, you can seamlessly navigate the process of subscribing to services while maintaining your anonymity, allowing you to enjoy online services securely and privately.

## How Does It Work?

Here's how you can use MaskD to pay for services:

1. **Provider Registration**: Service providers register with us, indicating they want to accept payments through MaskD.

2. **Pay Through Us**: You start by paying us (the middleman).

3. **Get Zero-Knowledge Proof**: Once you've paid, we send you a zero-knowledge proof to prove you made the payment.

4. **Access Your Service**: Then, you go to the website of the service you want, like Netflix or FanDuel, and show them your zero-knowledge proof. They'll give you access without needing to know who you are.

   ![Version 1](https://cdn.discordapp.com/attachments/1155039444852822027/1155462869681459234/Screenshot_2023-09-24_at_4.34.18_AM.png)

   ![Version 2](https://cdn.discordapp.com/attachments/1155039444852822027/1155462869350092910/Screenshot_2023-09-24_at_4.40.02_AM.png)

This way, both you and the service provider can benefit from the anonymity and security provided by MaskD.

## How to Run?

To get MaskD up and running, follow these simple steps:

### Frontend

1. **Copy Environment Variables**:

   In the frontend directory, you'll find a file named `.env.example`. Make a copy of this file and rename it to `.env.local`. Then, open it and fill in the following information:

   - `NEXT_PUBLIC_CONTRACT_ADDRESS`: Put the contract address for payments and subscriptions.
   
   - `NEXT_PUBLIC_CONTRACT_VERIFICATION_ADDRESS`: Add the contract address for verifying zero-knowledge proofs.
   
   - `NEXT_PUBLIC_CHAIN`: Specify your blockchain chain (e.g., Ethereum, Binance Smart Chain, etc.).

2. **Install Dependencies**:

   Use `yarn` to install the necessary dependencies for the frontend:

   ```bash
   yarn install
   ```

3. **Start the Frontend**:

   Launch the frontend by running the following command:

   ```bash
   yarn dev
   ```

   This will open the application in your web browser.

### Server

1. **Navigate to the Server Directory**:

   Open your terminal or command prompt and change the directory to the server folder:

   ```bash
   cd server
   ```

2. **Install Dependencies**:

   Use `yarn` to install the necessary dependencies for the server:

   ```bash
   yarn install
   ```

3. **Start the Server**:

   Start the server by running the following command:

   ```bash
   node index.js
   ```

   This will create a server running locally at `http://localhost:3001`. The frontend will use this server to create zero-knowledge proofs (ZKPs).

With the smart contracts deployed and the frontend updated with the contract addresses, your MaskD application is ready to securely handle payments and zero-knowledge proofs for anonymous transactions.

## Why Use MaskD?

- **Complete Anonymity**: MaskD allows you to use services without disclosing your personal information.

- **Flexible Payments**: Pay for various services anonymously, like Netflix, FanDuel, and more.

- **No Personal Data Required**: Protect your privacy by avoiding the need to share personal information.

- **Security First**: MaskD prioritizes security to keep your transactions safe.

---

With MaskD, you can enjoy your favorite services anonymously, whether it's Netflix, FanDuel, or others, without revealing your identity. Give it a try today!