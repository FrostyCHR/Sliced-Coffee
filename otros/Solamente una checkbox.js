function onlyOne(checkbox) {
    let checkboxes = document.getElementsByName('check')
    for (item of checkboxes) {
        if (item!==checkbox) {
            item.checked=false;
        }
    }
    }
