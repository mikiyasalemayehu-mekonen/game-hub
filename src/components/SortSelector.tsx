import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder?: string;
}
function SortSelector({onSelectSortOrder, sortOrder}: Props) {
  const sortOrders = [
    {value:"", label:"Relevance"},
    {value:"-added", label:"Date Added"},
    {value:"name", label:"Name"},
    {value:"-released", label:"Released date"},
    {value:"-metacritic", label:"Popularity "},
    {value:"-average_rating", label:"Average Rating"},
  ]
  const currentSortOrder = sortOrders.find(order => order.value === sortOrder)
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
      {sortOrders.map((order) => (
          <MenuItem key={order.value} onClick={() => onSelectSortOrder(order.value)}>
            {order.label}
          </MenuItem>
        )) }
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
