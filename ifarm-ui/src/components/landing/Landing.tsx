import { Sidebar, SidebarBody, SidebarItem, SidebarList } from "keep-react";
import {
  BoundingBox,
  Heart,
  HouseLine,
  MapPinLine,
  PersonSimple,
  ShoppingBag,
  Truck,
  User,
} from "phosphor-react";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "keep-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../common/Logo";

const Landing = () => {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate(); // React Router hook for navigation
  return (
    <div className="flex relative">
      {/* Sidebar */}
      <div>
        <Sidebar>
          <SidebarBody>
            <Logo></Logo>
            <SidebarList>
              <SidebarItem onClick={() => navigate("/")}>
                <HouseLine size={20} />
                Home
              </SidebarItem>
              <SidebarItem onClick={() => navigate("/products")}>
                <BoundingBox size={20} />
                Products
              </SidebarItem>
              <SidebarItem onClick={() => navigate("/trackDelivery")}>
                <MapPinLine size={20} />
                Track
              </SidebarItem>
              <SidebarItem onClick={() => navigate("/transports")}>
                <Truck size={20} />
                Transport
              </SidebarItem>
              {/* <SidebarItem onClick={() => navigate("/trade")}>
                <ShoppingBag size={20} />
                Trade
              </SidebarItem> */}
              <SidebarItem onClick={() => navigate("/sellers")}>
                <PersonSimple size={20} />
                Sellers
              </SidebarItem>
              <SidebarItem onClick={() => navigate("/buyers")}>
                <User size={20} />
                Buyers
              </SidebarItem>
              {/* <SidebarItem onClick={() => navigate("/dashboard")}>
                <Heart size={20} />
                Support
              </SidebarItem> */}
            </SidebarList>
          </SidebarBody>
        </Sidebar>
      </div>

      {/* Main Content */}
      <div className="relative w-full h-screen flex items-center justify-center">
        {/* Background Image */}
        <img
          src="images/landing.png"
          alt="Crop Chain"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />

         {/* Login/Register Button - Top Right */}
         <div className="absolute top-5 right-5">
          <button
            className="px-6 py-2 bg-emerald-600 text-white rounded-lg shadow-md hover:bg-emerald-700 transition"
            onClick={() => navigate("/login")} // Redirect to Login Page
          >
            Login
          </button>
          <button
            className="px-6 py-2 ml-4 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
            onClick={() => navigate("/register")} // Redirect to Register Page
          >
            Register
          </button>
        </div>

        {/* Welcome Text */}
        <h1 className="relative -mt-96 p-8 text-white text-5xl font-bold z-10 bg-emerald-500 shadow-lg shadow-emerald-500/50">
          Welcome to Crop Chain
        </h1>

        {/* Cards Section */}
        <div className="absolute mt-80 mr-96 -ml-96">
          <Card>
            <CardHeader>
              <img
                src="images/products.jpg"
                className="rounded-t-xl"
                alt="image"
                width={600}
                height={300}
              />
            </CardHeader>
            <CardContent className="space-y-3">
              <CardTitle>Visit Available Products</CardTitle>
              <CardDescription>
                Visit available products that you can buy directly from farms.
              </CardDescription>
              <Button onClick={() => navigate("/products")}>Visit Products</Button>
            </CardContent>
          </Card>
        </div>

        <div className="absolute mt-80">
          <Card>
            <CardHeader>
              <img
                src="images/transportations.jpg"
                className="rounded-t-xl"
                alt="image"
                width={400}
                height={150}
              />
            </CardHeader>
            <CardContent className="space-y-3">
              <CardTitle>Visit Available Transportations</CardTitle>
              <CardDescription>
                Visit available transportation options that make it easy to receive your product.
              </CardDescription>
              <Button onClick={() => navigate("/transports")}>Visit Transportation</Button>
            </CardContent>
          </Card>
        </div>

        <div className="absolute mt-80 ml-96 -mr-96">
          <Card>
            <CardHeader>
              <img
                src="images/track.png"
                className="rounded-t-xl"
                alt="image"
                width={600}
                height={300}
              />
            </CardHeader>
            <CardContent className="space-y-3">
              <CardTitle>Track Your Products Location</CardTitle>
              <CardDescription>
                Track products in real-time to predict when they will arrive.
              </CardDescription>
              <Button onClick={() => navigate("/trackDelivery")}>Track Products</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default Landing;
