import { InlineKeyboard } from "grammy"

const menu = new InlineKeyboard()
  .text("🤖 Нейросети", "product_ai")
  .row()
  .text("📱 Авито", "product_avito")
  .row()
  .text("📄 Работа", "product_work")
  .row()
  .text("💰 Подработка", "product_sidejob")
  .row()
  .text("📣 Контент", "product_content")
  .row()
  .text("🛒 Маркетплейсы", "product_market")

export function registerCommands(bot) {
  bot.command("start", (ctx) => {
    ctx.reply(
      `👋 Добро пожаловать в НЕЙРОПУЛЬТ!

Здесь готовые цифровые наборы, которые можно сразу использовать:

🤖 Нейросети
📱 Авито
📄 Работа
💰 Подработка
📣 Контент
🛒 Маркетплейсы

Выбирай нужный раздел ниже 👇`,
      { reply_markup: menu },
    )
  })

  bot.command("help", (ctx) =>
    ctx.reply("Выбери нужный раздел через меню ниже 👇", {
      reply_markup: menu,
    }),
  )

  bot.callbackQuery("product_ai", async (ctx) => {
    await ctx.answerCallbackQuery()
    await ctx.reply(
      "🤖 НЕЙРОПУЛЬТ\n\n500+ готовых промптов для нейросетей.\n\nЦена: 299 ₽",
      {
        reply_markup: new InlineKeyboard()
          .text("💳 Купить", "buy_ai")
          .row()
          .text("⬅️ Назад", "back_menu"),
      },
    )
  })

  bot.callbackQuery("product_avito", async (ctx) => {
    await ctx.answerCallbackQuery()
    await ctx.reply(
      "📱 AVITO PRO\n\n100 готовых шаблонов для объявлений и продаж.\n\nЦена: 299 ₽",
      {
        reply_markup: new InlineKeyboard()
          .text("💳 Купить", "buy_avito")
          .row()
          .text("⬅️ Назад", "back_menu"),
      },
    )
  })

  bot.callbackQuery("product_work", async (ctx) => {
    await ctx.answerCallbackQuery()
    await ctx.reply(
      "📄 РАБОТА PRO\n\nГотовые шаблоны резюме и откликов.\n\nЦена: 199 ₽",
      {
        reply_markup: new InlineKeyboard()
          .text("💳 Купить", "buy_work")
          .row()
          .text("⬅️ Назад", "back_menu"),
      },
    )
  })

  bot.callbackQuery("product_sidejob", async (ctx) => {
    await ctx.answerCallbackQuery()
    await ctx.reply(
      "💰 ПОДРАБОТКА\n\n50 направлений для дополнительного заработка.\n\nЦена: 199 ₽",
      {
        reply_markup: new InlineKeyboard()
          .text("💳 Купить", "buy_sidejob")
          .row()
          .text("⬅️ Назад", "back_menu"),
      },
    )
  })

  bot.callbackQuery("product_content", async (ctx) => {
    await ctx.answerCallbackQuery()
    await ctx.reply(
      "📣 КОНТЕНТ-МАШИНА\n\nГотовый месяц контента для продвижения.\n\nЦена: 299 ₽",
      {
        reply_markup: new InlineKeyboard()
          .text("💳 Купить", "buy_content")
          .row()
          .text("⬅️ Назад", "back_menu"),
      },
    )
  })

  bot.callbackQuery("product_market", async (ctx) => {
    await ctx.answerCallbackQuery()
    await ctx.reply(
      "🛒 MARKET START\n\nПошаговый чек-лист для первого запуска на маркетплейсе.\n\nЦена: 399 ₽",
      {
        reply_markup: new InlineKeyboard()
          .text("💳 Купить", "buy_market")
          .row()
          .text("⬅️ Назад", "back_menu"),
      },
    )
  })

  bot.callbackQuery("back_menu", async (ctx) => {
    await ctx.answerCallbackQuery()
    await ctx.reply("Выбирай нужный раздел 👇", {
      reply_markup: menu,
    })
  })
}
