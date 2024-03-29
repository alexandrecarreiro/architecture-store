import { forwardRef, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import useIsomorphicLayoutEffect from "lib/hooks/useIsomorphicLayoutEffect";
import { cleanEmptyFilter } from "lib/utils";

import Input from "components/shared/Input";
import Label from "components/shared/Label";
import Button from "components/shared/Button";
import ButtonFilter from "./ButtonFilter";

const Area = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-bottom: 25px;
  margin-top: 25px;
  width: 100%;

  @media (max-width: 576px) {
    width: calc(100% - 30px);
    align-self: center;
  }

  & > div {
    align-self: center;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    display: flex;
    flex-direction: column;
    width: 90%;
  }
`;

const Header = styled.div`
  align-items: center;
  box-shadow: rgba(149, 157, 165, 0.3) 0px 3px 3px;
  display: flex;
  height: 50px;
  width: 100%;

  & > h3 {
    flex: 1;
    margin: 15px;
  }
`;

const Icon = styled.img`
  flex: 1;
  margin-left: 5px;
  max-height: 24px;
  max-width: 24px;
  padding: 10px;

  @media (min-width: 992px) {
    display: none;
  }
`;

const Content = styled.div`
  overflow: hidden;

  & > div {
    padding: 15px;
  }
`;

const Row = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(${(props) => props.columns || 4}, 1fr);
  margin-bottom: 10px;
`;

const forwardRefToContent = forwardRef(({ children }, ref) => (
  <Content ref={ref}>{children}</Content>
));

forwardRefToContent.displayName = "MotionContent";

const MotionContent = motion(forwardRefToContent);

function Sidebar({ router, initialFilter }) {
  const [isFilterVisible, setIsFilterVisible] = useState("visible");
  const [filter, setFilter] = useState(
    initialFilter || {
      rooms: [],
      bathrooms: [],
      parkings: [],
      keywords: "",
      minSquareArea: -1,
      maxSquareArea: -1,
    }
  );

  function handleFilterAnimate() {
    if (window.screen.width < 992) {
      setIsFilterVisible("hidden");
    } else {
      setIsFilterVisible("visible");
    }
  }

  function checkBoxSelect(field, value) {
    let data = filter[field];
    let index = data.indexOf(value);

    if (index > -1) {
      data.splice(index, 1);

      return setFilter({
        ...filter,
        data,
      });
    }

    return setFilter({
      ...filter,
      [field]: data.concat(value),
    });
  }

  useIsomorphicLayoutEffect(() => {
    console.log(initialFilter);
    handleFilterAnimate();

    window.addEventListener("resize", handleFilterAnimate);

    return () => {
      window.removeEventListener("resize", handleFilterAnimate);
    };
  }, []);

  return (
    <Area
      onSubmit={(e) => {
        e.preventDefault();
        router.push({
          pathname: "/busca",
          query: cleanEmptyFilter(filter),
        });
      }}
    >
      <div>
        <Header>
          <h3>Filtro</h3>
          <Icon
            onClick={() =>
              setIsFilterVisible(
                isFilterVisible === "visible" ? "hidden" : "visible"
              )
            }
            src={
              isFilterVisible === "visible"
                ? "icons/filter-up.png"
                : "icons/filter-down.png"
            }
          />
        </Header>
        <MotionContent
          initial="visible"
          animate={isFilterVisible}
          variants={{
            hidden: {
              height: 1,
            },
            visible: {
              height: "100%",
              transition: {
                delay: 0,
              },
            },
          }}
        >
          <div>
            <Label>Palavra chave:</Label>
            <Input
              type="text"
              value={filter.keywords}
              onChange={(e) =>
                setFilter({ ...filter, keywords: e.target.value })
              }
              placeholder="Digite uma palavra-chave"
            />
            <Label>Área Quadrada:</Label>
            <Row columns={2}>
              <Input
                type="number"
                value={filter.minSquareArea > 0 ? filter.minSquareArea : null}
                min={0}
                onChange={(e) =>
                  setFilter({
                    ...filter,
                    minSquareArea: parseInt(e.target.value),
                  })
                }
                placeholder="Min."
              />
              <Input
                type="number"
                value={filter.maxSquareArea > 0 ? filter.maxSquareArea : null}
                min={0}
                onChange={(e) =>
                  setFilter({
                    ...filter,
                    maxSquareArea: parseInt(e.target.value),
                  })
                }
                placeholder="Max."
              />
            </Row>
            <Label>Quantos Quartos?</Label>
            <Row>
              <ButtonFilter
                value={1}
                onClick={() => checkBoxSelect("rooms", 1)}
                selected={filter.rooms.indexOf(1) > -1}
              />
              <ButtonFilter
                value={2}
                onClick={() => checkBoxSelect("rooms", 2)}
                selected={filter.rooms.indexOf(2) > -1}
              />
              <ButtonFilter
                value={3}
                onClick={() => checkBoxSelect("rooms", 3)}
                selected={filter.rooms.indexOf(3) > -1}
              />
              <ButtonFilter
                value="4+"
                onClick={() => checkBoxSelect("rooms", 4)}
                selected={filter.rooms.indexOf(4) > -1}
              />
            </Row>
            <Label>Quantos Banheiros?</Label>
            <Row>
              <ButtonFilter
                value={1}
                onClick={() => checkBoxSelect("bathrooms", 1)}
                selected={filter.bathrooms.indexOf(1) > -1}
              />
              <ButtonFilter
                value={2}
                onClick={() => checkBoxSelect("bathrooms", 2)}
                selected={filter.bathrooms.indexOf(2) > -1}
              />
              <ButtonFilter
                value={3}
                onClick={() => checkBoxSelect("bathrooms", 3)}
                selected={filter.bathrooms.indexOf(3) > -1}
              />
              <ButtonFilter
                value="4+"
                onClick={() => checkBoxSelect("bathrooms", 4)}
                selected={filter.bathrooms.indexOf(4) > -1}
              />
            </Row>
            <Label>Quantas Vagas?</Label>
            <Row>
              <ButtonFilter
                value={1}
                onClick={() => checkBoxSelect("parkings", 1)}
                selected={filter.parkings.indexOf(1) > -1}
              />
              <ButtonFilter
                value={2}
                onClick={() => checkBoxSelect("parkings", 2)}
                selected={filter.parkings.indexOf(2) > -1}
              />
              <ButtonFilter
                value={3}
                onClick={() => checkBoxSelect("parkings", 3)}
                selected={filter.parkings.indexOf(3) > -1}
              />
              <ButtonFilter
                value="4+"
                onClick={() => checkBoxSelect("parkings", 4)}
                selected={filter.parkings.indexOf(4) > -1}
              />
            </Row>
            <Button
              width="100%"
              onClick={() =>
                router.push({
                  pathname: "/busca",
                  query: cleanEmptyFilter(filter),
                })
              }
            >
              Buscar
            </Button>
            <input type="submit" style={{ display: "none" }} />
          </div>
        </MotionContent>
      </div>
    </Area>
  );
}

export default Sidebar;
