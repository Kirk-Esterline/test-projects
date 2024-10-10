// See https://aka.ms/new-console-template for more information
Console.WriteLine("Welcome to Rock Paper Scissors!");
Console.WriteLine("If you are ready to play press any key to continue ... ");
Console.ReadKey(true);
Console.WriteLine("Type in your move, then press enter to 'Shoot'...");

string move = Console.ReadLine();

if (move == "rock")
{
    Console.WriteLine("Rock was a good choice");
}