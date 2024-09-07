import React from "react";
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Stack,
  Anchor,
  Button,
  Flex,
} from "@mantine/core";
import { IconPhoneCall, IconEdit } from "@tabler/icons-react";
import { Company } from "../types";
import { DUMMY_IMAGE_COMPANY } from "../constants";

type CompanyCardProps = Pick<
  Company,
  "name" | "imageUrl" | "website" | "phone" | "ownerName" | "sectors"
> & {
  handleEditClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleCardClick?: () => void;
};

/**
 * A component that displays a card with company details.
 *
 * @param props - The company details to display.
 * @returns A JSX element representing the company card.
 */
const CompanyCard: React.FC<CompanyCardProps> = ({
  name,
  imageUrl,
  website,
  phone,
  ownerName,
  sectors,
  handleEditClick,
  handleCardClick = () => {},
}) => {
  return (
    <Card
      shadow="sm"
      radius="md"
      withBorder
      className="cursor-pointer relative h-full"
      onClick={handleCardClick}
    >
      <Card.Section>
        <Image src={imageUrl || DUMMY_IMAGE_COMPANY} alt={name} radius="md" />
      </Card.Section>
      <Flex h="100%" direction="column" justify="space-between">
        <Stack mt="sm">
          <Anchor
            href={website || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Text fw={500} size="lg">
              {name}
            </Text>
          </Anchor>
          <Text size="xs" c="d" fw={700}>
            {ownerName}
          </Text>

          {phone && (
            <Group>
              <IconPhoneCall size={16} />
              <Text size="sm">{phone}</Text>
            </Group>
          )}

          {sectors && sectors.length > 0 && (
            <Group mt="md">
              {sectors.map((sector, index) => (
                <Badge key={index} color="gray" variant="light">
                  {sector.name}
                </Badge>
              ))}
            </Group>
          )}
        </Stack>
        <Button
          onClick={handleEditClick}
          variant="outline"
          color="blue"
          size="md"
          mt={20}
          leftSection={<IconEdit size={16} />}
        >
          Edit
        </Button>
      </Flex>
    </Card>
  );
};

export default CompanyCard;
