
We saw - 1_Basic_Setup
There we also saw :
- mapStateToProps 
- mapDispatchToProps

In this we will see the 2nd parameter to these function - "ownProps"(name can be anything)
and whta is its use
In 1_Basic_Setup - CakeComp was Class Component and IceCreamComp was Hook Component
however as we are learning about mapStateToProps and mapDispatchToProps which is for Class Component
so in this both CakeComp and IceCreamComp will be Class Component only

==================================================================================================================

instead of separate component - CakeContainer and IceCreamContainer we can create just one component - ItemContainer
and decide what item to show cake or iceCream depending on prop passed

    <ItemContainerComp cake />   ==> check if cake is passed as props from App.js if yes then show Cake
    <Itemcontainercomp  />       ==> if not cake(means nothing or any other value) then show iceCream

    In the above the prop "cake" passed in ItemCOntainerCOmp in App.js will be captured in 
    ownProps of mapStateToProps and mapDispatchToProps

