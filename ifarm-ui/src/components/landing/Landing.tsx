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
const Landing = () => {
  return (
<div className="flex">
  <div>
  <Sidebar>
      <SidebarBody>
        <img
          src="images/logo.png"
          alt="speaker"
          className="rounded-full w-16 h-16"
        />{" "}
        <SidebarList>
          <SidebarItem>
            <HouseLine size={20} />
            Home
          </SidebarItem>
          <SidebarItem>
            <BoundingBox size={20} />
            Products
          </SidebarItem>
          <SidebarItem>
            <MapPinLine size={20} />
            Track
          </SidebarItem>
          <SidebarItem>
            <PersonSimple size={20} />
            Sellers
          </SidebarItem>
          <SidebarItem>
            <User size={20} />
            Buyers
          </SidebarItem>
          <SidebarItem>
            <Truck size={20} />
            Transport
          </SidebarItem>
          <SidebarItem>
            <ShoppingBag size={20} />
            Trade
          </SidebarItem>
          <SidebarItem>
            <Heart size={20} />
            Support
          </SidebarItem>
        </SidebarList>
      </SidebarBody>
    </Sidebar>
  </div>
  <div>
    <h1>Welcome to Crop Chain</h1>
<img src="images/landing.png" alt="Crop Chain" />
  </div>
</div>
  );
};
export default Landing;
