

function getFilterData() {
  const filterData: FilterData = {};

  const hash = location.hash.replace('#', '');
  if (hash !== '') {
    const splt = hash.split(';');

    splt.forEach(part => {
      const s = part.split('-');
      if (s.length > 1) {
        filterData[s[0]] = s[1];
      } else {
        filterData[s[0]] = true;
      }
    });
  }

  return filterData;
}


export function updateHash(updatedHashData: FilterData) {
  const existingData = getFilterData();
  const hashData = Object.assign(existingData, updatedHashData);

  const keys = Object.keys(hashData);
  const newData = keys.map(key => {
    const d = hashData[key];
    if (d === true) {
      return key;
    } else {
      return key + '-' + d;
    }
  });

  window.location.hash = newData.sort().join(';')
}


export function runFilters() {
  const filterData = getFilterData();

  if (filterData.diff) {
    const diffElm = document.getElementById('d-' + filterData.diff);
    if (diffElm) {
      document.querySelector('.scroll-view').scrollTop = diffElm.offsetTop;
    }
  }

  const rows = document.querySelectorAll('compare-row');
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];

    row.hidden = false;

    if (!filterData.mismatch && row.mismatchedPixels === 0) {
      row.hidden = true;
    }

    if (!filterData.comparable && !row.isComparable) {
      row.hidden = true;
    }

    if (filterData.device && filterData.device !== row.device) {
      row.hidden = true;
    }

    if (!row.hidden) {
      row.runCompare();
    }
  }
}


window.onhashchange = () => {
  runFilters();
};


export interface FilterData {
  diff?: string;
  mismatch?: 'any';
  comparable?: 'all';
  device?: string;
}
