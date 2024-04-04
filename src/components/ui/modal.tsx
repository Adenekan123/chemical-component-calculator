import {
  Button,
  CustomFlowbiteTheme,
  Modal,
} from "flowbite-react";
import React, { useMemo, useState } from "react";
import { TComponents } from "../../types";
import UiInput from "./input";

type PropTypes = {
  list: TComponents[];
  selectComponent: (v: TComponents) => void;
  show: boolean;
  close: () => void;
};

const theme: CustomFlowbiteTheme["modal"] = {
  content: {
    base: "relative h-full w-full p-4 md:h-auto",
    inner:
      "relative flex max-h-[90dvh] flex-col rounded-lg bg-[#28292b] shadow dark:bg-gray-700",
  },
  "footer": {
    "base": "flex items-center space-x-2 rounded-b border-gray-700 p-6 dark:border-gray-600",
    "popup": "border-t"
  }
};

export const ComponentModal = (props: PropTypes) => {
  const { list, show, close, selectComponent } = props;
  const [searchText, setSearchText] = useState("");

  const componentLists = useMemo(() => {
    const components = list.filter(
      (item) =>
        item &&
        item.components &&
        item.components.toLowerCase().includes(searchText.toLowerCase())
    );
    return components.map((item: TComponents, index: number) =>
      item && item.components ? (
        <Button
          color="transparent"
          className="justify-start hover:bg-slate-600"
          fullSized
          key={index + "cmp"}
          onClick={() => selectComponent(item)}
          style={{ color: "white" }}
        >
          {item.components}
        </Button>
      ) : null
    );
  }, [list, searchText, selectComponent]);

  return (
    <Modal theme={theme} show={show} onClose={close} className="bg-black">
      <div className="w-full border-b border-gray-500 pb-4 pt-1 px-6">
        <UiInput
          type="search"
          name="seatchfield"
          placeholder="Search component.."
          value={searchText}
          onChange={({ target }) => setSearchText(target.value)}
        />
      </div>
      <Modal.Body>
        <div className="flex flex-col">{componentLists}</div>
      </Modal.Body>
      <Modal.Footer>
        <Button color="gray" onClick={close}>
          close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
