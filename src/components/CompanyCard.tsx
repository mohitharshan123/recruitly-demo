import React from "react";
import { Card, Image, Text, Group, Badge, Stack, Anchor } from "@mantine/core";
import { IconPhoneCall } from "@tabler/icons-react";
import { Company } from "../types";

type CompanyCardProps = Pick<
  Company,
  "name" | "imageUrl" | "website" | "phone" | "ownerName" | "sectors"
>;

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
}) => {
  return (
    <Card
      shadow="sm"
      radius="md"
      withBorder
      className="cursor-pointer relative h-full"
    >
      <Card.Section>
        <Image
          src={
            imageUrl ||
            "https://www.shutterstock.com/image-photo/angled-view-large-window-covered-600nw-2277326565.jpg"
          }
          alt={name}
          radius="md"
        />
      </Card.Section>

      <Stack mt="sm">
        <Anchor
          href={website || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full"
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
    </Card>
  );
};

export default CompanyCard;
