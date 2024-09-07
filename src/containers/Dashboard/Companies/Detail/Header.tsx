import { Group, Image, Text } from "@mantine/core";
import { IconLink, IconPhone } from "@tabler/icons-react";
import { DUMMY_IMAGE_COMPANY } from "../../../../constants";
import { Company } from "../../../../types";

type CompanyHeaderProps = Pick<
  Company,
  "name" | "imageUrl" | "website" | "phone" | "ownerName"
>;

const Header: React.FC<CompanyHeaderProps> = ({
  name,
  ownerName,
  website,
  imageUrl,
  phone,
}) => (
  <Group align="center">
    <Image
      src={imageUrl || DUMMY_IMAGE_COMPANY}
      alt={name}
      radius="md"
      w={150}
      h={150}
    />
    <div>
      <Text size="xl" fw={700}>
        {name}
      </Text>
      <Text size="md" color="dimmed">
        {ownerName ? `Owner: ${ownerName}` : "No owner information"}
      </Text>
      <Group mt="md">
        {website && (
          <a href={website} target="_blank" rel="noopener noreferrer">
            <IconLink size={20} color="grey" />
          </a>
        )}
        {phone && (
          <a href={`tel:${phone}`}>
            <IconPhone size={20} color="grey" />
          </a>
        )}
      </Group>
    </div>
  </Group>
);

export default Header;
