import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

const Pagination = (props) => {
    const { itemsCount, pageSize, currentPage } = props;
    console.log(currentPage);
    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);

    return (
        <div>
            <nav aria-label="Page navigation example">
            <ul className="pagination">
                {pages.map(page => (
                    <li
                        key={page}
                        className={page === currentPage ? 'page-item active' : 'page-item'}
                        style={{ cursor: 'pointer' }}
                    >
                        <a className="page-link" href="/#" onClick={() => props.onPageChange(page)}>{page}</a>
                    </li>
                ))}
            </ul>
            </nav>
        </div>);
}

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired

}

export default Pagination;