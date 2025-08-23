import usePlatforms, { type Platform } from "@/hooks/usePlatforms"
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronBarDown} from "react-icons/bs"

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform?: Platform | null;
}

function PlatformSelector({onSelectPlatform, selectedPlatform }:Props) {
    const { data ,error} = usePlatforms();
    if (error)  return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown/>}>{selectedPlatform?.name || "Platforms"}</MenuButton>
      <MenuList>
        {data.map(platform => (
          <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector