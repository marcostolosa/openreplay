import React from 'react';
import stl from './SavedSearchDropdown.css';
import { Icon } from 'UI';
import { applyFilter, remove } from 'Duck/search'
import { connect } from 'react-redux';
import { confirm } from 'UI/Confirmation';

interface Props {
  list: Array<any>
  applyFilter: (filter: any) => void
  remove: (id: string) => Promise<void>
  onClose: () => void
}

function Row ({ name, onClick, onClickEdit, onDelete }) {
  return (
    <div
      onClick={onClick}
      className="flex items-center cursor-pointer hover:bg-active-blue"
    >
      <div className="px-3 py-2">{name}</div>
      <div className="ml-auto flex items-center">
        <div className="cursor-pointer px-2 hover:bg-active-blue" onClick={onClickEdit}><Icon name="pencil" size="14" /></div>
        <div className="cursor-pointer px-2 hover:bg-active-blue" onClick={onDelete}><Icon name="trash" size="14" /></div>
      </div>
    </div>
  )
}

function SavedSearchDropdown(props: Props) {
  const onClick = (item) => {
    props.applyFilter(item.filter)
    props.onClose()
  }

  const onDelete = async (instance) => {
    if (await confirm({
      header: 'Confirm',
      confirmButton: 'Yes, Delete',
      confirmation: `Are you sure you want to permanently delete this search?`
    })) {
      props.remove(instance.alertId).then(() => {
        // toggleForm(null, false);
      });
    }
  }

  const onClickEdit = (instance) => {
    // toggleForm(instance);
  }

  return (
    <div className={stl.wrapper}>
      {props.list.map(item => (
        <Row
          key={item.searchId}
          name={item.name}
          onClick={() => onClick(item)}
          onDelete={() => onDelete(item) }
          onClickEdit={() => onClickEdit(item)}
        />
      ))}
    </div>
  );
}

export default connect(null, { applyFilter, remove })(SavedSearchDropdown);