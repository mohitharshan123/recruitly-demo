import { Card, Group, Badge, Text } from "@mantine/core";
import { Category } from "../../../../types";

const AdditionalDetails: React.FC<{
  industries: Category[];
  sectors: Category[];
}> = ({ industries, sectors }) => (
  <Card padding="lg" shadow="sm">
    <Text size="lg" fw={500}>
      Additional Details
    </Text>
    <Group mt="md">
      <Text>
        <strong>Industries:</strong>{" "}
        {industries.length
          ? industries.map((i) => i.name).join(", ")
          : "No industries listed"}
      </Text>
    </Group>
    <Group mt="md">
      <Text>
        <strong>Sectors:</strong>{" "}
        {sectors.length
          ? sectors.map((s) => <Badge mr={10}>{s.name}</Badge>)
          : "No sectors listed"}
      </Text>
    </Group>
  </Card>
);

export default AdditionalDetails;
