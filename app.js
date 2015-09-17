var Header = React.createClass({
    render: function () {
        return (
            <h1 className="title">{this.props.text}</h1>
        );
    }
});

var SearchBar = React.createClass({
    render: function () {
        return (
            <input type="search" />
        );
    }
});

var ContactList = React.createClass({
    render: function(){
        return {
                //Instantiate a reference 
          var data = new SObjectModel.acc();
          //process the data received in return
          data.retrieve({ limit: 10 } ,function(err, records){
              //if failure
              if(err) alert(err.message);
              else {
                        var ul = document.getElementById("cList");
                        records.forEach(function(record) {
                        // Build the text for a warehouse line item
                        var toAdd = record.get("Name");
                        // Add the line item to the warehouses list
                        var rule = document.createElement("br");
                        var li = document.createElement("li");
                        li.appendChild(document.createTextNode(toAdd));
                        ul.appendChild(li);
                        ul.appendChild(rule);
              });  
              }
          });
        }
    }
});

var HomePage = React.createClass({
    render: function () {
        
        return (
            <div>
                <ContactList/>
            </div>
        );
    }
});

React.render(
    <HomePage />,
    document.body
);