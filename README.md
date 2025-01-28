# Ecommerce Bundle

**Ecommerce Bundle** is a collection of reusable React components designed for building e-commerce applications quickly and efficiently. This package includes essential components like navigation bars, carousels, product cards, and product detail views.

## Installation

Use the package manager npm or yarn to install the modules

```bash
npm install ecommerce-bundle
```

### Install TailwidCSS

```bash
npm install -D tailwindcss
npm init tailwindcss
```

In the tailwind.config.js add this to content:

```python
"./node_modules/ecommerce-bundle/dist/**/*.{js,jsx,ts,tsx}"
```

## Usage

### 1. Navbar

Dynamic Navbar with search
Usage:

```python
import { NavBar } from "ecommerce-bundle";

const products = [
  { name: "Gaming Chair", link: "/gaming-chair" },
  { name: "Office Chair", link: "/office-chair" },
];

function App() {
  return <NavBar products={products} />;
}

export default App;
```

### 2. NavbarWithDropdowns

A navigation bar with dropdown menus for each menu item.
Usage:

```python
import { NavbarWithDropdowns } from "ecommerce-bundle";

const menuItems = [
  {
    title: "COMPUTERS",
    isActive: true,
    dropdownContent: [
      { title: "Laptops", link: "/laptops" },
      { title: "Desktops", link: "/desktops" },
    ],
  },
];


function App() {
  return <NavbarWithDropdowns menuItems={menuItems} backgroundColor="bg-yellow-500" />;
}

export default App;
```

### 3. Crousel

Dynamic Carousel
Usage:

```python
import { Carousel } from "ecommerce-bundle";

const slides = [
  {
    title: "Sale!",
    subtitle: "Unbeatable Offers",
    image: "https://placehold.co/400x300",
    buttonText: "Shop Now",
    buttonLink: "/shop",
  },
];

function App() {
  return <Carousel slides={slides} buttonColor="bg-blue-500" />;
}

export default App;
```

### 4. Crousel

Dynamic Product Card
Usage:

```python
import { ProductCard } from "ecommerce-bundle";

function App() {
  return (
    <ProductCard
      tag="New"
      image="https://placehold.co/200x200"
      title="Gaming Chair"
      price={299}
      currency="USD"
      deliveryDate="Tomorrow, Jan 29"
      fulfilledBy="Ecommerce Inc."
      storePickup={true}
    />
  );
}

export default App;
```

### 5. Product Details

Dynamic Product Details
Usage:

```python
import { ProductCard } from "ecommerce-bundle";

function App() {
  return (
    <ProductCard
      tag="New"
      image="https://placehold.co/200x200"
      title="Gaming Chair"
      price={299}
      currency="USD"
      deliveryDate="Tomorrow, Jan 29"
      fulfilledBy="Ecommerce Inc."
      storePickup={true}
    />
  );
}

export default App;
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[GNU Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)
