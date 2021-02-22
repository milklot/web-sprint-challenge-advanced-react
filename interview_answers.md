# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

Functional components are simple stateless component without having a local state but remember there is a hook in react to add state behavior in functional component as well. Stateful component can contains the state object and event handling function, user actions as well;

2. When does a componentWillMount function be called? What about a componentWillUpdate?

  componentDidMount() -> called after successfull mount of component;
  componentDidUpdate() -> called after state/props were updated;

3. Define stateful logic.

  Data/state manipulation thru react hooks;


4. What are the three step of creating a successful test? What is done in each phase?

"Arrange, Act, Assert"

Arrange - render our component;

Act  - assigning our elements to variables for reference and fill out our fields/pressing buttons etc.

Assert - checking our component if it renders/submiting etc.

