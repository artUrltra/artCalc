<?php
/* Smarty version 3.1.30, created on 2017-01-10 17:18:50
  from "C:\OpenServer\domains\NewCalc\admin\Smarty\templates\menu.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_5874ed4a0cfcc8_59555457',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '238f2101f2a0d2c6e098f75fb892176e88dc811b' => 
    array (
      0 => 'C:\\OpenServer\\domains\\NewCalc\\admin\\Smarty\\templates\\menu.tpl',
      1 => 1484054559,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5874ed4a0cfcc8_59555457 (Smarty_Internal_Template $_smarty_tpl) {
?>
<!-- Static navbar -->
<nav class="navbar navbar-inverse navbar-static-top">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                    aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
                <li class="current"><a href="../admin/index.php?page=stol">Профиль</a></li>
                <li class="current"><a href="../admin/index.php?page=Peremochki">Перемычки</a></li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                       aria-expanded="false">Дополнения: <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['supplements']->value, 'item', false, NULL, 'supplements', array (
));
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['item']->value) {
?>
                            <li><a href="../admin/index.php?page=Supplements&id=<?php echo $_smarty_tpl->tpl_vars['item']->value['id'];?>
"><?php echo $_smarty_tpl->tpl_vars['item']->value['name'];?>
:<?php echo $_smarty_tpl->tpl_vars['item']->value['type'];?>
</a></li>
                        <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

                    </ul>
                </li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                       aria-expanded="false">Наполнение: <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['categoryMaterials']->value, 'item', false, NULL, 'detors', array (
));
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['item']->value) {
?>
                            <li><a href="../admin/index.php?page=materials&type=<?php echo $_smarty_tpl->tpl_vars['item']->value['id'];?>
"><?php echo $_smarty_tpl->tpl_vars['item']->value['name'];?>
</a></li>
                        <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

                    </ul>
                </li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                       aria-expanded="false">Декор: <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['dekors']->value, 'item', false, NULL, 'detors', array (
));
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['item']->value) {
?>
                            <li><a href="../admin/index.php?page=decor&id=<?php echo $_smarty_tpl->tpl_vars['item']->value['id'];?>
"><?php echo $_smarty_tpl->tpl_vars['item']->value['name'];?>
</a></li>
                        <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

                    </ul>
                </li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                       aria-expanded="false">Фурнитура: <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        
                        <li><a href="../admin/index.php?page=furnitura1">Механизмы</a></li>
                        <li><a href="../admin/index.php?page=furnitura2">Элементы</a></li>
                        <li><a href="../admin/index.php?page=furnitura3">Аксессуары</a></li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                       aria-expanded="false">Управления: <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li class="current"><a href="../admin/index.php?page=manager">Управления пользователями</a></li>
                        <li class="current"><a href="../admin/index.php?page=manegerdekor">Управления декором</a></li>
                        <li class="current"><a href="../admin/index.php?page=managermaterials">Управления материалами</a></li>
                        <li class="current"><a href="../admin/index.php?page=managersupplements">Управления дополнения</a></li>
                        <li class="current"><a href="../admin/index.php?page=viewprofil">Вид профиля</a></li>
                        <li class="current"><a href="../admin/index.php?page=manegerstart">Стартовый профиль/материал</a></li>
                        <li class="current"><a href="../admin/index.php?page=EquationEditor">Редактор формул</a></li>
                    </ul>
                </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <a class="navbar-brand" href="#">Авторизирован :<?php echo $_smarty_tpl->tpl_vars['user']->value;?>
</a>
            </ul>
        </div><!--/.nav-collapse -->
    </div>
</nav>
<?php }
}
