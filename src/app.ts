import "dotenv/config";
import { Bot } from "grammy";
import { setupBot } from "./bot/bot.js";

async function bootstrap() {
  // Создание экземпляра бота
  const bot = new Bot(process.env.TELEGRAM_BOT_TOKEN!);

  // Настройка бота
  await setupBot(bot);

  // Запуск бота
  bot.start();
  console.log("Bot is running...");

  // Обработка завершения работы
  process.once("SIGINT", () => bot.stop());
  process.once("SIGTERM", () => bot.stop());
}

bootstrap().catch(console.error);
