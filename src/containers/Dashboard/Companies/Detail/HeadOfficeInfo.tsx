import { Grid, Card, Group, Text } from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";
import { HeadOffice } from "../../../../types";

const HeadOfficeInfo: React.FC<{ headOffice: HeadOffice }> = ({
  headOffice,
}) => (
  <Grid>
    <Grid.Col span={12}>
      <Card padding="lg" shadow="sm">
        <Text size="lg" fw={500}>
          Head Office
        </Text>
        <Text mt="md" fw={500}>
          {headOffice?.name || "No head office information"}
        </Text>
        <Text mt="md">
          {headOffice?.address?.addressLine || "No address information"}
        </Text>
        <Text>
          {headOffice?.address?.cityName}{" "}
          {headOffice?.address?.country || "No country information"}
        </Text>
        <Group mt="md">
          <IconMapPin size={20} />
          <Text>
            {headOffice?.address?.postCode || "No postal information"}
          </Text>
        </Group>
      </Card>
    </Grid.Col>
  </Grid>
);

export default HeadOfficeInfo;
