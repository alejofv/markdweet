using Nancy;

namespace Alexphi.Markdweet.Api
{
    public class CustomBootstrapper : DefaultNancyBootstrapper
    {
        public override void Configure(Nancy.Configuration.INancyEnvironment environment)
        {
            this.Conventions.ViewLocationConventions.Clear();

            this.Conventions.ViewLocationConventions.Add(
                (viewName, model, context) => string.Concat("content/", viewName));

            this.Conventions.ViewLocationConventions.Add(
                (viewName, model, context) => string.Concat("content/views/", viewName));
        }
        
        protected override IRootPathProvider RootPathProvider
        {
            get { return new CustomRootPathProvider(); }
        }
    }

    internal class CustomRootPathProvider : IRootPathProvider
    {
        public string GetRootPath()
        {
            return Program.RootDir;
        }
    }
}