import { Divider, Skeleton, Stack } from "@mantine/core";

const DetailSkeleton: React.FC = () => (
  <Stack mt="xl">
    <Skeleton height={150} radius="md" mb="xl" />
    <Skeleton height={30} width="50%" radius="xl" />
    <Skeleton height={20} width="30%" radius="xl" />
    <Skeleton height={20} width="20%" radius="xl" />
    <Skeleton height={20} width="20%" radius="xl" />
    <Divider my="sm" />
    <Skeleton height={40} radius="xl" />
    <Divider my="sm" />
    <Skeleton height={40} radius="xl" />
    <Divider my="sm" />
    <Skeleton height={40} radius="xl" />
    <Divider my="sm" />
    <Skeleton height={40} radius="xl" />
  </Stack>
);

export default DetailSkeleton;
