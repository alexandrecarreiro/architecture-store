import Box from "components/shared/Box";
import Button from "./Button";
import navigation from "./navigation.json";

function Menu() {
  return (
    <Box alignItems="center" justifyContent="flex-end">
      {navigation.map((index, key) => (
        <Button title={index.title} route={index.route} key={key} />
      ))}
    </Box>
  );
}

export default Menu;
