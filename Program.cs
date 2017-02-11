using Microsoft.AspNetCore.Hosting;

namespace Alexphi.Markdweet
{
    public class Program
    {
        internal static string RootDir { get; private set; }

        static void Main(string[] args)
        {
            RootDir = System.IO.Directory.GetCurrentDirectory();

            var host = new WebHostBuilder()
                .UseKestrel()
                .UseContentRoot(RootDir)
                .UseStartup<Api.Startup>()
                .Build();
            
            host.Run();
        }
    }
}