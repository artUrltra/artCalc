<?php
/* Smarty version 3.1.30, created on 2017-05-27 19:23:21
  from "C:\xampp\htdocs\pdf\temp\heder.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_5929b609264593_98832392',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '488a99e561460bb43b414f2cce4cb81639c794aa' => 
    array (
      0 => 'C:\\xampp\\htdocs\\pdf\\temp\\heder.tpl',
      1 => 1495905632,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5929b609264593_98832392 (Smarty_Internal_Template $_smarty_tpl) {
?>
<page backtop="10px" backbottom="10px" backleft="10px" backright="15px">
    <div style='width: 100%;max-width: 100%;height: 99%;max-height: 99%;border: 1px solid #999999;'>
        <img style='width: 100%;height: 70px;' src='../img/shapka.png'>
        <table style="width: 100%;margin-top: -3px;">
            <tr>
                <td style='width:18%;text-align:left;'><br/><a href='mailto:'
                                                               class="pdflink"></a></td>
                <td style='width:56%;'></td>
                <td class="pdfbold" style='width:14%;text-align:center;font-size:15px;color:#666666;'><br/>от <span
                            class="pdfboldunderline" style="color:#666666;font-size:15px;"><?php echo $_smarty_tpl->tpl_vars['date']->value;?>
</span>&nbsp;&nbsp;
                </td>
                <td style='width:12%;'>
                    <div class="pdfpagenumberarea"><span class="pdfpagenumber">[[page_cu]]</span></div>
                </td>
            </tr>
        </table>
        <p class="pdfpageh1 pdfbold" style="padding-top:-77px;font-size:20px;">Коммерческое предложение <br/>
            № <br/> на изготовление <?php echo $_smarty_tpl->tpl_vars['typeFurnituraName']->value;?>
</p>
        <table align="center" style="width:100%;color:#666666;text-align:center;">
            <tr>
                <td class="pdfnormal pdfsmall">Ширина</td>
                <td class="pdfbold pdfboldnumber"><?php echo $_smarty_tpl->tpl_vars['width']->value;?>
</td>
                <td class="pdfnormal pdfsmall">мм.</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td class="pdfnormal pdfsmall">Высота</td>
                <td class="pdfbold pdfboldnumber"><?php echo $_smarty_tpl->tpl_vars['height']->value;?>
</td>
                <td class="pdfnormal pdfsmall">мм.</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td class="pdfnormal pdfsmall">Площадь</td>
                <td class="pdfbold pdfboldnumber"><?php echo $_smarty_tpl->tpl_vars['area']->value;?>
</td>
                <td class="pdfnormal pdfsmall">м<sup>2</sup>.</td>
            </tr>
        </table>
        <br/>
        <?php if ($_smarty_tpl->tpl_vars['schema']->value !== '') {?>
            <div style="width: 100%;margin-top: 10px; text-align: center;">
                <p style="font-size:20px;">Схема</p>
                <img src="../<?php echo $_smarty_tpl->tpl_vars['schema']->value;?>
" style="width: 80%;">
            </div>
        <?php }?>
        <br/>
        <div>
            <p style="text-align:center;color:#000000;font-size:32px;margin-bottom:10px;">Варианты комплектации</p>
            <table
                    style="width:99%;vertical-align:middle;margin:auto;border:1px solid #999999;border-collapse:collapse;font-size:14px;">
                <tr>
                    <td class="pdfbold"
                        style="width:46%;border:1px solid #999999;text-align:center;color:#4e4f86;font-size:18px;">
                        Варианты комплектации
                    </td>
                    <td class="tabletext12" style="color:#000140;">Оптимальный</td>
                    <td class="tabletext13" style="color:#6763b1;">Эконом</td>
                    <td class="tabletext13" style="color:#6763b1;">Премиум</td>
                </tr>
                <tr>
                    <td class="tabletext11">Профиль</td>
                    <td class="tabletext12"><?php echo $_smarty_tpl->tpl_vars['prisefull0']->value;?>
 р./
                    </td>
                    <td class="tabletext13"><?php echo $_smarty_tpl->tpl_vars['prisefull1']->value;?>

                        р./
                    </td>
                    <td class="tabletext13"><?php echo $_smarty_tpl->tpl_vars['prisefull2']->value;?>


                        р./
                    </td>
                </tr>
                <tr>
                    <td class="tabletext11">Заполнение</td>
                    <td class="tabletext12">р.</td>
                    <td class="tabletext13">р.</td>
                    <td class="tabletext13">р.</td>
                </tr>
                <tr>
                    <td class="tabletext11">Фурнитура</td>
                    <td class="tabletext12"></td>
                    <td class="tabletext13"></td>
                    <td class="tabletext13"></td>
                </tr>
                <tr>
                    <td class="tabletext11">Монтаж</td>
                    <td class="tabletext12"> р.</td>
                    <td class="tabletext13"> р.</td>
                    <td class="tabletext13"> р.</td>
                </tr>
                <tr>
                    <td class="tabletext11">Доставка</td>
                    <td class="tabletext12"> р.</td>
                    <td class="tabletext13"> р.</td>
                    <td class="tabletext13"> р.</td>
                </tr>
                <tr>
                    <td class="tabletext11">Замер</td>
                    <td class="tabletext12"> р.</td>
                    <td class="tabletext13"> р.</td>
                    <td class="tabletext13"> р.</td>
                </tr>
                <tr>
                    <td class="tabletext11">Срочность</td>
                    <td class="tabletext12"> р.</td>
                    <td class="tabletext13"> р.</td>
                    <td class="tabletext13"> р.</td>
                </tr>
                <tr>
                    <td class="tabletext11">
                        <span class="pdfbold pdfboldred">Итого за 1 комплект:</span>
                        <p class="pdfitalic pdflinkitalic"
                           style="text-align:right;text-decoration:none;margin-top:5px;">Детально
                            на&nbsp;&nbsp;&nbsp;</p>
                    </td>
                    <td class="tabletext12">
                            <span class="pdfbold pdfboldred">р.
                            </span>
                        <p class="pdfitalic pdflinkitalic" style="margin-top:5px;">Стр. 2</p>
                    </td>
                    <td class="tabletext13">
                        <span class="pdfbold pdfboldgray"> р.</span>
                        <p class="pdfitalic pdflinkitalic" style="margin-top:5px;">Стр. 3</p>
                    </td>
                    <td class="tabletext13">
                        <span class="pdfbold pdfboldgray"> р.</span>
                        <p class="pdfitalic pdflinkitalic" style="margin-top:5px;">Стр. 4</p>
                    </td>
                </tr>
                <?php if ($_smarty_tpl->tpl_vars['count']->value > 1) {?>
                    <tr>
                        <td class="tabletext11">
                            <span class="pdfbold pdfboldred">Итого за </span>
                        </td>
                        <td class="tabletext12">
                            <span class="pdfbold pdfboldred"> р.</span>
                        </td>
                        <td class="tabletext13"><span class="pdfbold pdfboldgray"
                                                      style="color:gray;font-size:16px;"> р.</span>
                        </td>
                        <td class="tabletext13">
                            <span class="pdfbold pdfboldgray" style="color:gray;font-size:16px;">р.</span>
                        </td>
                    </tr>
                <?php }?>
            </table>
            <p class="pdfitalic pdflinkitalic" style="font-size:20px;margin-bottom:5px;">Альтернативные предложения на
                стр.</p>
        </div>
        <div class="pdfooter">
            <p style="text-align:center;font-size:15px;">Условия работы: <span class="pdfbolditalic"
                                                                               style="color:#666666;font-size:15px;">Сборка на месте установки. Работы производятся в нерабочее время.</span>
            </p>
            <table style="width:100%;text-align:center;">
                <tr>
                    <td style="width:38%;font-size:15px;">Срок изготовления <span class="pdfbold" style="font-size:15px;color:#666666;">20</span>
                        рабочих дней.
                    </td>
                    <td style="width:38%;font-size:15px;">Порядок оплаты <span class="pdfbold" style="font-size:15px;color:#666666;">70%</span>
                        предоплата.
                    </td>
                    <td style="width:24%;font-size:15px;">Гарантия <span class="pdfbold"
                                                                         style="font-size:15px;color:#666666;">1</span>
                        год.
                    </td>
                </tr>
            </table>
            <p style="text-align:center;font-size:15px;" class="pdfitalic">
                Данное коммерческое предложение действительно в течение 10 календарных дней.<br/>
                Коммерческое предложение
                подготовил менеджер :
                <br/>
            </p>
        </div>
    </div>
</page>
<?php }
}
