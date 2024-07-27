function create_list(){
    let item_list=[];

    function add_items(item){
        item_list.push(item);
    }

    function remove_item(index){
        if(index > 0 && index < item_list.length){
            item_list.splice(index,1);
        }else{
            console.log('invalid index');
        }
    }

    function show_list(){
        console.log('List', item_list)
    }

    return {add_items, remove_item, show_list}
}

const callme=create_list()

callme.add_items('samosa');
callme.add_items('vadapav');
callme.add_items('remote');
callme.add_items('phone');

callme.show_list();

callme.remove_item(2);
callme.show_list();