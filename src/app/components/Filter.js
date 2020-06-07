import React from 'react';
import { connect } from 'react-redux';
import { changeFilter, visibilityFilterMap } from '../store';

const mapStateToProps = state => ({
  visibilityFilter: state.visibilityFilter
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter(filter) {
    dispatch(changeFilter({ filter }));
  }
});

export const Filter = connect(mapStateToProps, mapDispatchToProps)(FilterComponent);

function FilterComponent({ visibilityFilter, onChangeFilter }) {
  return (
    <div>
      <span>
        Display:
        <select
          onChange={ ev => onChangeFilter(ev.target.value) }
          value={ visibilityFilter }
        >
          { Object.entries(visibilityFilterMap).map(([ key, text ]) => (
            <option key={ key } value={ key } >{ text }</option>
          )) }
        </select>
      </span>
    </div>
  )
}
