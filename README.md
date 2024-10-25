# PSPDFKit with NextJS v15 + Local Hosting Web SDK Assets

#### This project demonstrates how to integrate PSPDFKit with a Next.js v15 application and locally host the Web SDK assets. Hosting the assets locally can improve load times, reduce dependency on external servers, and allow for a more controlled deployment environment.

## Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v20 or later recommended)
- [pnpm](https://pnpm.io/) (v9 or later recommended)

## Getting Started

Follow these steps to set up and run the project locally:

### 1. Clone the Repository

Clone the project repository to your local machine:

```bash
    git clone https://github.com/PSPDFKit/pspdfkit-web-example-nuxt2-with-vuetify.git
    cd pspdfkit-web-example-nuxt2-with-vuetify
```

### 2. Install Dependencies

```bash
  pnpm install
```

> Note: Usually you have to copy the web assets in your static files folder. In this project our `update-web-assets`
> script is handling this part for you. It's configured to update the web assets during the initial installation,
> before starting your dev server and before building your project to minimise frustration.

### 4. Run the Development Server

```bash
    pnpm dev
```

### 5. Build for Production

```bash
    pnpm build
```

### 6. Start the Production Server

```bash
    pnpm start
```

You can now open http://localhost:3000 in your browser and enjoy!

## License

This software is licensed under a [modified BSD license](LICENSE).

## Contributing

Please ensure
[you have signed our CLA](https://pspdfkit.com/guides/web/current/miscellaneous/contributing/) so that we can accept your contributions.
