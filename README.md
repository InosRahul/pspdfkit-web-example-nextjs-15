This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Below are the steps to set up and run the project locally.

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
  yarn install
```

### 3. Copy the PSPDFKit for Web library assets to the static directory

```bash
    cp -R ./node_modules/pspdfkit/dist/pspdfkit-lib static/pspdfkit-lib
```

### 4. Run the Development Server

```bash
    yarn dev
```
### 5. Build for Production

```bash
    yarn build
```

### 6. Start the Production Server

```bash
    yarn start
```

You can now open http://localhost:3000 in your browser and enjoy!

## License

This software is licensed under a [modified BSD license](LICENSE).

## Contributing

Please ensure
[you have signed our CLA](https://pspdfkit.com/guides/web/current/miscellaneous/contributing/) so that we can accept your contributions.