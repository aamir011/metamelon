import React                             from "react";
import ReactDOM                          from "react-dom";
import { BrowserRouter, Route, Switch }  from "react-router-dom";
import secondLayout                     from "./components/layouts/main-two";
import Layout                           from "./components/app";
import aboutUs                          from "./components/pages/about-us/AboutUs";
import marketplace                     from "./components/pages/marketplace/marketplacepage";
import builder                     from "./components/pages/builder/builderPage";
import contact                          from "./components/pages/contact/Contact";
import events                            from "./components/pages/events/eventsPage";
import playCards                            from "./components/pages/playCards/playCardsPage";
// import packageSidebar                   from "./components/pages/package/PackageSidebar";
// import packageDetails                   from "./components/pages/package/PackageDetails";
// import beatMyQuote                      from "./components/pages/beatmyquote";
// import termsConditons                      from "./components/pages/termsConditons";
import './index.css';
import './index.scss';
class Root extends React.Component{
    
    render(){
        return(
            <BrowserRouter basename={"/"}>
                    <Switch>
                        <Route exact path='/' component={secondLayout} />
                        <Layout>
                           <Route path={`${process.env.PUBLIC_URL}/blog`} component={aboutUs} />
                              <Route path={`${process.env.PUBLIC_URL}/marketplace`} component={marketplace} />
                            <Route path={`${process.env.PUBLIC_URL}/builder`} component={builder} />
                            <Route path={`${process.env.PUBLIC_URL}/events`} component={events} />
                            <Route path={`${process.env.PUBLIC_URL}/playcards`} component={playCards} />
                            {/*<Route path={`${process.env.PUBLIC_URL}/airlines`} component={airlines} />
                            <Route path={`${process.env.PUBLIC_URL}/airline/:airlineName`} component={airlineDetails} />
                            <Route path={`${process.env.PUBLIC_URL}/beat-my-quote`} component={beatMyQuote} />
                            <Route path={`${process.env.PUBLIC_URL}/terms-conditons`} component={termsConditons} /> */}
                            <Route path={`${process.env.PUBLIC_URL}/dao`} component={contact} />
                        </Layout>
                    </Switch>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(
    <React.StrictMode>
            <Root />
    </React.StrictMode>,
    document.getElementById("root")
);

