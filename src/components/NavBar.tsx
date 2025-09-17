// src/components/NavBar.tsx
import { Box, Input, IconButton, useColorMode } from "@chakra-ui/react";
import { type ReactNode, useState } from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons"; // For night/day icons

interface Props {
  onSearch: (searchText: string) => void;
  children?: ReactNode;
}

function NavBar({ onSearch, children }: Props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const [searchText, setSearchText] = useState(""); // Local state for controlled input

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchText(value);
    onSearch(value); // Trigger parent callback
  };

  return (
    <Box display="flex" alignItems="center" gap={2} padding={2}>
      {/* Logo on the left */}
      <Box fontSize="xl" fontWeight="bold" flexShrink={0}>
        GHub
      </Box>

      {/* Search input in the middle, responsive width */}
      <Input
        placeholder="Search games..."
        value={searchText}
        onChange={handleSearchChange}
        width={{ base: "50%", sm: "60%", md: "300px" }}
        flexGrow={1}
      />

      {/* Night mode toggle button */}
      <IconButton
        aria-label={`Switch to ${
          colorMode === "light" ? "dark" : "light"
        } mode`}
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
        variant="outline"
        size="sm"
        flexShrink={0}
      />

      {/* Children (e.g., hamburger button) on the right */}
      {children}
    </Box>
  );
}

export default NavBar;
