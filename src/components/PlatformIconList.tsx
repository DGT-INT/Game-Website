import React from "react";
import { Game } from "../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { FaWindows } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { siNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: Game["platform"][];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: Record<string, IconType> = {
    "PC (Windows)": FaWindows,
    "Web Browser": BsGlobe,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
