import React from 'react';

const List = React.memo(({items, handleItemCLick}) =>
     {

        console.log('<List/> Отрендерился')
        return (
            <div>
                {items.map(item => <div key={item.id} onClick={() => {
                    handleItemCLick(item.id)
                }}>
                    {item.name}
                </div>)}
            </div>
        );
    }
);

export default List;