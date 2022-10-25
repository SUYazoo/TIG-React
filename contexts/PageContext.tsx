import React from 'react';
import { PageProps } from '../components/PageInfo'; 

const initPageState= {
    pageState : {
      nom : '',
      img : '',
      icon : '',
      description : '',
    }
    
}
const pageContextWrapper = (component?: React.Component) => ({
    ...initPageState,
    affectPage:(page: PageProps)=>{
      initPageState.pageState.nom= page.nom;
      initPageState.pageState.img= page.img;
      initPageState.pageState.description= page.description;
        component?.setState({ context: pageContextWrapper(component) });
    }
});
type Context = ReturnType<typeof pageContextWrapper>;

export const PageContext = React.createContext<Context>(pageContextWrapper());

interface State {
  context: Context;
}

export class PageContextProvider extends React.Component<{children?: React.ReactNode;}, {}> {
  state: State = {
    context: pageContextWrapper(this),
  };

  render() {
    return (
      <PageContext.Provider value={this.state.context}>
        {this.props.children}
      </PageContext.Provider>
    );
  }
}

