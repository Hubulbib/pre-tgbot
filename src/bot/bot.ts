import { Bot } from "grammy";

export const setupBot = async (bot: Bot) => {
  bot.on("message", async (ctx, next) => {
    await ctx.reply(
      "Осталось совсем немного — запуск сервиса уже близко! Как только станет доступен прием заказов, мы вам обязательно сообщим."
    );
    next();
  });

  // Обработка ошибок
  bot.catch((err) => {
    console.error("Ошибка бота:", err);
  });
};
