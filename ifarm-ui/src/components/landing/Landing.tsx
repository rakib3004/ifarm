
import {
  ChartPie,
  CheckSquare,
  Gear,
  HouseLine,
  Lifebuoy,
  Link,
  MagnifyingGlass,
  PresentationChart,
  Stack,
  Users,
} from 'phosphor-react'
import {
//   Avatar,
//   AvatarImage,
  Input,
  InputIcon,
  Sidebar,
  SidebarBody,
//   SidebarFooter,
  SidebarItem,
  SidebarList,
} from 'keep-react'
const Landing = () => {
    return (
        <Sidebar>
          <SidebarBody>
            <Link href="/" className="inline-flex items-center">
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-metal-900 dark:bg-metal-800 text-heading-6 font-semibold text-white">
                K.
              </span>
            </Link>
            <fieldset className="relative">
              <Input placeholder="Search" className="ps-11" />
              <InputIcon>
                <MagnifyingGlass size={19} color="#AFBACA" />
              </InputIcon>
            </fieldset>
            <SidebarList>
              <SidebarItem>
                <HouseLine size={20} />
                Home
              </SidebarItem>
              <SidebarItem>
                <PresentationChart size={20} />
                Products
              </SidebarItem>
              <SidebarItem>
                <Stack size={20} />
                Track
              </SidebarItem>
              <SidebarItem>
                <CheckSquare size={20} />
                Sellers
              </SidebarItem>
              <SidebarItem>
                <ChartPie size={20} />
                Buyers
              </SidebarItem>
              <SidebarItem>
                <Users size={20} />
                Transport
              </SidebarItem>
              <SidebarItem>
                <Lifebuoy size={20} />
                Trade
              </SidebarItem>
              <SidebarItem>
                <Gear size={20} />
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
