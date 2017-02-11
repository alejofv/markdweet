using Nancy;

namespace Alexphi.Markdweet.Api.Modules
{
    public class MainModule : NancyModule
    {
        public MainModule()
        {
            Get("/", args => View["index"]);
        }
    }
}