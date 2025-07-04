import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [cartItems, setCartItems] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    {
      id: 1,
      name: "Спортивный воздушный фильтр",
      price: 3500,
      category: "Фильтры",
      image: "/img/beeded02-45a5-41fb-9676-3afa7bea254e.jpg",
      description:
        "Высокопроизводительный воздушный фильтр для всех марок авто",
    },
    {
      id: 2,
      name: "Спортивная выхлопная система",
      price: 25000,
      category: "Выхлопы",
      image: "/img/f206fcc0-a7da-42c2-8f57-4ab4d2355a91.jpg",
      description: "Универсальная выхлопная система из нержавеющей стали",
    },
    {
      id: 3,
      name: "Тюнинг чип OBD2",
      price: 8500,
      category: "Электроника",
      image: "/img/522683b6-89cc-4af7-b182-57bfb4575969.jpg",
      description: "Универсальный чип для увеличения мощности двигателя",
    },
    {
      id: 4,
      name: "Спортивные тормозные колодки",
      price: 4200,
      category: "Тормоза",
      image: "/placeholder.svg",
      description: "Высокоэффективные тормозные колодки для спортивной езды",
    },
    {
      id: 5,
      name: "Универсальный обвес",
      price: 15000,
      category: "Обвесы",
      image: "/placeholder.svg",
      description: "Спортивный обвес из ABS пластика",
    },
    {
      id: 6,
      name: "Спортивная подвеска",
      price: 18000,
      category: "Подвеска",
      image: "/placeholder.svg",
      description:
        "Регулируемая спортивная подвеска для улучшения управляемости",
    },
  ];

  const categories = [
    "Все",
    "Фильтры",
    "Выхлопы",
    "Электроника",
    "Тормоза",
    "Обвесы",
    "Подвеска",
  ];
  const [selectedCategory, setSelectedCategory] = useState("Все");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "Все" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = () => {
    setCartItems(cartItems + 1);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Settings" size={24} className="text-black" />
              <span className="text-xl font-bold text-black">TuningParts</span>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Главная
              </a>
              <a
                href="#catalog"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Каталог
              </a>
              <a
                href="#contacts"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Контакты
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Input
                  placeholder="Поиск запчастей..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 border-gray-300 focus:border-black"
                />
                <Icon
                  name="Search"
                  size={20}
                  className="absolute right-3 top-3 text-gray-400"
                />
              </div>

              <Button
                variant="outline"
                className="relative border-gray-300 hover:border-black"
              >
                <Icon name="ShoppingCart" size={20} />
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-red-600 text-white">
                    {cartItems}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black via-gray-900 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Универсальные
            <br />
            <span className="text-red-400">Тюнинг Запчасти</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
            Повысьте производительность вашего автомобиля с нашими качественными
            запчастями
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4"
            >
              <Icon name="Wrench" size={20} className="mr-2" />
              Смотреть каталог
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Быстрая доставка</h3>
              <p className="text-gray-600">
                Доставим ваши запчасти в кратчайшие сроки по всей России
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Гарантия качества</h3>
              <p className="text-gray-600">
                Все товары сертифицированы и имеют гарантию производителя
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Wrench" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Универсальность</h3>
              <p className="text-gray-600">
                Запчасти подходят для большинства марок и моделей автомобилей
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Каталог товаров
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-black text-white"
                    : "border-gray-300 hover:border-black"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader className="p-0">
                  <div className="aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      variant="secondary"
                      className="bg-gray-100 text-gray-700"
                    >
                      {product.category}
                    </Badge>
                    <span className="text-2xl font-bold text-black">
                      {product.price.toLocaleString()} ₽
                    </span>
                  </div>
                  <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {product.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button
                    className="w-full bg-black hover:bg-gray-800 text-white"
                    onClick={addToCart}
                  >
                    <Icon name="ShoppingCart" size={20} className="mr-2" />В
                    корзину
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Контакты</h2>
            <p className="text-gray-600 text-lg">
              Свяжитесь с нами для консультации и заказа
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Телефон</h3>
              <p className="text-gray-600">+7 (xxx) xxx-xx-xx</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-600">info@tuningparts.ru</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Адрес</h3>
              <p className="text-gray-600">г. Москва, ул. Автозаводская, 1</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="Settings" size={24} className="text-white" />
              <span className="text-xl font-bold">TuningParts</span>
            </div>
            <p className="text-gray-400">
              © 2024 TuningParts. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
