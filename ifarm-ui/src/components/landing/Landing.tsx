
import {
  Sidebar,
  SidebarBody,
  SidebarItem,
  SidebarList
} from 'keep-react';
import {
  BoundingBox,
  Heart,
  HouseLine,
  MapPinLine,
  PersonSimple,
  ShoppingBag,
  Truck,
  User
} from 'phosphor-react';
const Landing = () => {
    return (
        <Sidebar>
          <SidebarBody>
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
          {/* <SidebarFooter>
            <Avatar>
              <AvatarImage src="/images/avatar/avatar-1.png" alt="avatar" />
              <AvatarFallback>KR</AvatarFallback>
            </Avatar>
            <div>
               <p className="text-body-4 font-medium text-metal-400 dark:text-white">Enzo Farnandez</p>
               <p className="text-body-4 font-normal text-metal-300 dark:text-metal-400">enzo123@gmail.com</p>
            </div>
          </SidebarFooter> */}
        </Sidebar>
      )
}
export default Landing;
