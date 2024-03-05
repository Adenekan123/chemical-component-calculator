import { Button, Modal } from "flowbite-react";
import React, { useMemo, useState } from "react";
import { TComponents } from "../../types";
import UiInput from "./input";

type PropTypes = {
  list: TComponents[];
  selectComponent: (v: TComponents) => void;
  show: boolean;
  close: () => void;
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
          color="white"
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
    <Modal show={show} onClose={close} className="bg-black">
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
